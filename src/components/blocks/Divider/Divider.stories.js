import Divider from "./Divider";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Blocks/Divider',
  component: Divider, 
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    shape: { 
      control: 'select',
      options: ['waves', 'curve', 'triangle', 'triangle-asym', 'arrow', 'tilt', 'split', 'book', 'waves-opacity', 'curve-asym'],
    },
    color: {
      control: {
        type: 'color'
      }
    },
    shapeHeight: {
      control: {
        type: 'range',
        min: 0,
        max: 300,
      },
    },
    shapeWidth: {
      control: {
        type: 'range',
        min: 100,
        max: 300,
        default: '100'
      }
    },
    flip: {
      control: 'boolean'
    },
    top: {
      control: 'boolean'
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Waves = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    color: '#eee',
    shape: 'waves',
    flip: false,
    top: false
  }
}

export const Curve = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'curve'
  },
};

export const Triangle = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'triangle'
  }
}

export const TriangleAsym = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'triangle-asym'
  },
};

export const Arrow = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'arrow'
  },
};

export const Tilt = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'tilt'
  },
};

export const Split = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'split'
  },
};

export const Book = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'book'
  },
};

export const WavesOpacity = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'waves-opacity'
  },
};

export const CurveAsym = {
  args: {
    shapeHeight: 150,
    shapeWidth: 100,
    shape: 'curve-asym'
  },
};