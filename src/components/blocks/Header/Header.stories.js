import Header from "./Header";
import TypoGraphy from "../../Elements/Typography/Typography";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/Header',
  component: Header, 
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    height: {
      control: 'text'
    }
  },
};

const template = {
  render: (args) => (
    <Header {...args}>
      <TypoGraphy type="h1">Dit is mijn header</TypoGraphy>
      <div className="flex justify-center">
        <TypoGraphy className="w-[85%]" font="bold">Lorem ipsum odor amet, consectetuer adipiscing elit. Cras penatibus posuere cras. Hendrerit non commodo porttitor? Laoreet potenti aenean. Mollis a per eu. Lorem nibh viverra ante. Purus sit mi phasellus eros. Dignissim purus curabitur mi.</TypoGraphy>
      </div>
    </Header>
  )
}
export const Default = {
  ...template,
  args: {
    className: 'h-[700px]'
  }
}