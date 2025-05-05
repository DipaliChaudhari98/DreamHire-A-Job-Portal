import { Modal, Text, Title } from '@mantine/core';
import React from 'react';

interface FooterModalProps {
  opened: boolean;
  onClose: () => void;
  title: string;
}

const modalContentMap: Record<string, string> = {
    "Find Job": `
      DreamHire offers a powerful job search experience tailored to your preferences.
      Use filters to narrow down roles by job title, company, experience level, location, work mode (remote, hybrid, onsite), and salary range.
      You can also set job alerts to receive updates when new opportunities match your profile.
      Save jobs to review later and track the status of your applications from your personalized dashboard.
    `,
  
    "Find Company": `
      Discover top companies hiring on DreamHire.
      View detailed company profiles including their mission, work culture, employee reviews, current openings, and hiring patterns.
      Our platform helps job seekers make informed decisions by showcasing verified company information and interview experiences.
      You can also follow companies to get notified about new job postings.
    `,
  
    "Find Employee": `
      As an HR or recruiter, DreamHire equips you with tools to search and filter candidates based on skills, education, certifications, years of experience, and location preferences.
      View detailed applicant profiles, shortlist candidates, and schedule interviews seamlessly.
      Our AI-driven matching system also recommends top candidates for each role, helping reduce your time-to-hire.
      Invite potential candidates directly or post new job openings that are visible to thousands of active users.
    `,
  
    "About us": `
      DreamHire is a next-generation job portal that connects passionate professionals with future-forward organizations.
      Founded with the mission to simplify the job search and hiring journey, our platform is built on user-centric design and intelligent automation.
      We support both job seekers and employers with profile building, smart recommendations, interview scheduling, and feedback management — all in one place.
      Whether you're switching careers, looking for your first job, or building a hiring pipeline, DreamHire is your trusted partner.
    `,
  
    "Contact Us": `
      We’re here to help you with any questions or concerns.
      You can reach our support team at support@dreamhire.com or call our helpline at +91-9028324548 (Mon-Sat, 9am - 6pm IST).
      For partnership inquiries, media requests, or corporate hiring solutions, please write to contact@dreamhire.com.
      You can also connect with us on LinkedIn, Twitter, and Facebook for updates.
    `,
  
    "Privacy Policy": `
      At DreamHire, your privacy is our top priority.
      We collect only the necessary personal information to improve your experience and match you with relevant opportunities.
      Your data is encrypted and stored securely, and we never share your details with third parties without consent.
      You have full control over the visibility of your profile and applications.
      To learn more about what data we collect, how we use it, and your rights as a user, please review our full privacy policy.
    `,
  
    "Terms & Conditions": `
      By using DreamHire, you agree to comply with our community guidelines and fair use policy.
      Users are expected to provide accurate profile information and respect platform integrity.
      DreamHire reserves the right to suspend or terminate accounts found engaging in fraudulent activity, misuse, or abuse of the system.
      All content, job listings, and communication are subject to our moderation standards.
      Please read the full Terms & Conditions to understand your responsibilities and our platform’s legal framework.
    `,
  
    "Help & Support": `
      Need assistance? Our Help Center offers detailed guides on how to use DreamHire effectively — from profile creation to applying for jobs and managing interview schedules.
      You can also search for answers in our FAQs or raise a ticket with our support team.
      For urgent issues, live chat support is available during business hours.
      We are committed to resolving your queries promptly and ensuring a smooth experience on our platform.
    `,
  
    "Feedback": `
      We’re constantly striving to make DreamHire better for our users.
      Share your thoughts, suggestions, or report issues via our feedback form.
      Whether it’s about improving job recommendations, interface usability, or new feature ideas — we want to hear from you!
      Your input directly influences future updates and helps us build a platform that truly supports your career journey.
    `,
  
    "FAQs": `
      Find answers to common questions such as:
      • How do I apply for a job?
      • Can I update my resume after applying?
      • How does DreamHire match me with jobs?
      • How do recruiters contact me?
      • Is my profile visible to everyone?
      Explore our comprehensive FAQ section for solutions to common problems and platform usage tips.
      Still have a question? Reach out to our support team from the Help & Support section.
    `
  };
  
  const FooterModal: React.FC<FooterModalProps> = ({ opened, onClose, title }) => {
    return (
      <Modal
        opened={opened}
        onClose={onClose}
        title={<Title order={4} className="text-bright-sun-400">{title}</Title>}
        size="lg"
        centered
      >
        <Text size="sm" className="text-white whitespace-pre-line">
          {modalContentMap[title]}
        </Text>
      </Modal>
    );
  };

export default FooterModal;
