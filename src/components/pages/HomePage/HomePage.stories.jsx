import Home from "./HomePage";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Home',
  component: Home, 
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    height: {
      control: 'text'
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const Default = {
  args: {
    className: 'h-[700px]'
  }
}