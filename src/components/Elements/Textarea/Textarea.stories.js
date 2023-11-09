import Textarea from './Textarea';

export default {
  title: 'Elements/Textarea',
  component: Textarea, 
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
    color: 'default'
  }
};

export const Primary = {
  args: {
    label: 'Mijn text input',
    type: 'default',
    color: 'primary'
  }
};

export const Secondary = {
  args: {
    label: 'Mijn text input',
    type: 'default',
    color: 'secondary'
  }
};


export const Underline = {
  args: {
    label: 'Mijn text input',
    type: 'underline'
  }
};

export const UnderlinePrimary = {
  args: {
    label: 'Mijn text input',
    type: 'underline',
    color: 'primary'
  }
};

export const UnderlineSecondary = {
  args: {
    label: 'Mijn text input',
    type: 'underline',
    color: 'secondary'
  }
};

export const Border = {
  args: {
    label: 'Mijn text input',
    type: 'border'
  }
}

export const BorderPrimary = {
  args: {
    label: 'Mijn text input',
    type: 'border',
    color: 'primary'
  }
}


export const BorderSecondary = {
  args: {
    label: 'Mijn text input',
    type: 'border',
    color: 'secondary'
  }
}



