import TypoGraphy from "./Typography";

export default {
  title: 'Elements/Typgraphy',
  component: TypoGraphy,
  tags: ['autodocs'],
  argTypes: {
    font: { 
      control: 'select',
      options: ['bold', 'semibold', 'thin', 'extralight', 'light', 'normal', 'medium', 'extrabold', 'black'],
    },
    type: { 
      control: 'select',
      options: ['p', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    }
  }
}
const template = {
  render: (args) => (
    <TypoGraphy {...args}>
      {args.text}
    </TypoGraphy>
  )
}
export const Default = {
  ...template,
  args: {
    text: 'Dit is mijn text'
  }
}

export const Heading1 = {
  ...template,
  args: {
    text: 'Heading 1',
    type: 'h1'
  }
}

export const Heading2 = {
  ...template,
  args: {
    text: 'Heading 2',
    type: 'h2'
  }
}

export const Heading3 = {
  ...template,
  args: {
    text: 'Heading 3',
    type: 'h3'
  }
}

export const Heading4 = {
  ...template,
  args: {
    text: 'Heading 4',
    type: 'h4'
  }
}

export const Heading5 = {
  ...template,
  args: {
    text: 'Heading 5',
    type: 'h5'
  }
}

export const Heading6 = {
  ...template,
  args: {
    text: 'Heading 6',
    type: 'h6'
  }
}

export const Label = {
  ...template,
  args: {
    text: 'Label',
    type: 'label'
  }
}