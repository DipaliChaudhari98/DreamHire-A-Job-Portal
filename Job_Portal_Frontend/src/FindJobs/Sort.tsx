import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { updateSort } from '../Slices/SortSlice';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];
const talentSort=['Relevance','Experience (Low to High)','Experience (High to Low)'];


const Sort=(props:any)=> {
  const dispatch=useDispatch();
  const [selectedItem, setSelectedItem] = useState<string | null>("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = props.sort=="job"?opt.map((item) => (
    <Combobox.Option value={item} key={item} className='!text-xs'>
      {item}
    </Combobox.Option>
  )):talentSort.map((item) => (
    <Combobox.Option value={item} key={item} className='!text-xs'>
      {item}
    </Combobox.Option>
  ));

  return (
    
<>
      <Combobox
        store={combobox}
        width={150}
        position="bottom-start"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          dispatch(updateSort(val));
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div onClick={()=>combobox.toggleDropdown()} className='cursor-pointer border border-bright-sun-400 flex px-2 py-1 rounded-xl items-center gap-2 text-sm xs-mx:text-xs xs-mx:px-1 xs-mx:py-0 xsm-mx:mt-2'>
            {selectedItem} <IconAdjustments className='text-bright-sun-400 h-7 w-7'/>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      </>
  );
}
export default Sort;