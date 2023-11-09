import NavigationBar from './NavigationBar';

export default {
  title: 'Navigations/NavigationBar',
  component: NavigationBar, 
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: { 
      control: 'select',
      options: ['default', 'underline', 'border'],
    },
    color: { control: 'text' },
    label: {
      control: 'text',
    },
    error: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const Default = {
  args: {
    links: [
      { text: 'Home'},
      { text: 'About' },
      {
        text: 'Services',
        subLinks: [
          { text: 'Service 100' },
          { text: 'Service 101'}
        ]
      }
    ],
    color: 'primary',
    logo: './logo.png'
  }
};