'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from '@/hooks/use-translations';

const BubbleChat = dynamic(
  () => import('flowise-embed-react').then((mod) => mod.BubbleChat),
  { ssr: false }
);

export const FlowiseChatbot = () => {
  const { t, language } = useTranslations();
  const chatflowid = process.env.NEXT_PUBLIC_FLOWISE_CHATFLOW_ID;
  const apiHost = process.env.NEXT_PUBLIC_FLOWISE_API_HOST;

  if (!chatflowid || !apiHost) {
    return null;
  }

  return (
    <BubbleChat
      key={language}
      chatflowid={chatflowid}
      apiHost={apiHost}
      theme={{
        button: {
          backgroundColor: '#3B81F6',
          right: 20,
          bottom: 20,
          size: 48, // small
          dragAndDrop: true,
          iconColor: 'white',
          customIconSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: t('chatbotTooltip'),
          tooltipBackgroundColor: 'black',
          tooltipTextColor: 'white',
          tooltipFontSize: 16,
        },
        chatWindow: {
          showTitle: true,
          title: 'AquaHack Bot',
          titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          showAgentMessages: true,
          welcomeMessage: t('welcomeMessage'),
          errorMessage: t('errorProcessing'),
          backgroundColor: '#ffffff',
          height: 700,
          width: 400,
          fontSize: 16,
          poweredByTextColor: '#303235',
          botMessage: {
            backgroundColor: '#f7f8ff',
            textColor: '#303235',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          },
          userMessage: {
            backgroundColor: '#3B81F6',
            textColor: '#ffffff',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png',
          },
          textInput: {
            placeholder: t('describeIssue'),
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#3B81F6',
          }
        }
      }}
    />
  );
};
