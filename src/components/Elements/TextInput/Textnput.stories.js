import TextInut from './TextInput';

export default {
  title: 'Elements/TextInput',
  component: TextInut, 
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: { 
      control: 'select',
      options: ['default', 'underline', 'border'],
    },
    color: { 
      control: 'text',
      // options: ['blue', 'green', 'red', 'orange', 'amber', 'yellow', 'lime', 'emerald', 'teal', 'sky', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
    },
    label: {
      control: 'text',
    },
    error: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    label: 'Mijn text input',
    type: 'default',
    placeholder: 'Default'
  }
};

export const DefaultPrimary = {
  args: {
    label: 'Mijn text input',
    type: 'default',
    color: 'primary',
    placeholder: 'Primary'
  }
};

export const DefaultSecondary = {
  args: {
    label: 'Mijn text input',
    type: 'default',
    color: 'secondary',
    placeholder: 'Secondary'
  }
};


export const Underline = {
  args: {
    label: 'Mijn text input',
    type: 'underline',
    placeholder: 'Underline'
  }
};

export const UnderlinePrimary = {
  args: {
    label: 'Mijn text input',
    type: 'underline',
    color: 'primary',
    placeholder: 'Underline primary'
  }
};

export const UnderlineSecondary = {
  args: {
    label: 'Mijn text input',
    type: 'underline',
    color: 'secondary',
    placeholder: 'Underline secondary'
  }
};

export const Border = {
  args: {
    label: 'Mijn text input',
    type: 'border',
    placeholder: 'Border'
  }
}

export const BorderPrimary = {
  args: {
    label: 'Mijn text input',
    type: 'border',
    color: 'primary',
    placeholder: 'Border primary'
  }
}

export const BorderSecondary = {
  args: {
    label: 'Mijn text input',
    type: 'border',
    color: 'secondary',
    placeholder: 'Border secondary'
  }
}



