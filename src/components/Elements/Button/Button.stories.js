import Button from './Button';

export default {
  title: 'Elements/Button',
  component: Button, 
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: { 
      control: 'select',
      options: ['default', 'border'],
    },
    color: { 
      control: 'text',
    },
    label: {
      control: 'text',
    },
    className: {
      control: 'text'
    },
    onClick: {
      control: 'function'
    }
  },
};

export const Default = {
  args: {
    label: 'Default',
    color: 'default'
  }
}

export const Primary = {
  args: {
    label: 'Primary',
    color: 'primary'
  }
}

export const Secondary = {
  args: {
    label: 'Secondary',
    color: 'secondary'
  }
}

export const BorderDefault = {
  args: {
    label: 'Border default',
    color: 'default',
    type: 'border'
  }
}

export const BorderPrimary = {
  args: {
    label: 'Border primary',
    color: 'primary',
    type: 'border'
  }
}

export const BorderSecondary = {
  args: {
    label: 'Border secondary',
    color: 'secondary',
    type: 'border'
  }
}