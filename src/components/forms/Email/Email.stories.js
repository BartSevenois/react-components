import EmailForm from './EmailForm';

export default {
  title: 'Forms/Email',
  component: EmailForm, 
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
};

export const Default = {
  args: {
    type: 'default',
    color: 'default',
    title: 'Contact form',
    section: 'contact',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Habitant in feugiat himenaeos. Platea faucibus ante parturient. Quis ultricies nibh. Nisl erat fringilla. Porttitor gravida mus. Fusce nibh risus etiam. Nisi vel sollicitudin cubilia adipiscing eget. Velit conubia duis nascetur lacinia. Magna posuere sapien aenean dis.'
  }
}