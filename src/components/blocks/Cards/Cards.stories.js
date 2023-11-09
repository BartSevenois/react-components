import Cards from "./Cards";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/Cards',
  component: Cards, 
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: [
        'default',
        'overlay'
      ]
    }
  },
};

const services = [
  {
    title: 'Adipiscing',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc netus varius. Mus tempor. Nisl inceptos. Consequat suscipit ultricies nulla. Imperdiet mauris ultrices dapibus. Nunc id class ante.',
    image: './snoeien.jpg',
    to: '/adipiscing'
  },
  {
    title: 'Consectetuer',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nisl inceptos. Consequat suscipit ultricies nulla. Nunc id class ante.',
    image: './maaien.jpg',
    to: '/consectetuer'
  },
  {
    title: 'Consequat',
    description: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Nunc netus varius. Mus tempor. Nisl inceptos. Consequat suscipit ultricies nulla. Imperdiet mauris ultrices dapibus. Nunc id class ante.',
    image: './struiken.jpg',
    to: '/consequat'
  }
];

export const Default = {
  args: {
    data: services
  }
}

export const Overlay = {
  args: {
    data: services,
    type: 'overlay'
  }
}