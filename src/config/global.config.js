const globalConfig = (colors) => {
  return {
    colors: colors,
    background: {
      default: {
        text: '#3f3f46',
        hover: colors.default
      },
      primary: {
        text: colors.text.light,
        hover: colors.primary,
        textHover: '#3f3f46'
      },
      secondary: {
        text: '#FFF',
        hover: colors.secondary,
        textHover: '#3f3f46'
      }
    },
    button: {
      default: {
      },
      defaultType: {
        hover: 'transparant',
        default: {
          border: colors.default,
          borderHover: colors.default,
          text: colors.text.default
        },
        primary: {
          textHover: colors.primary,
          border: colors.primary,
          borderHover: colors.primary,
          text: colors.text.white,
    
        },
        secondary: {
          textHover: colors.secondary,
          border: colors.secondary,
          borderHover: colors.secondary,
          text: colors.text.white,
        }
      },
      borderType: {
        color: 'transparent',
        default: {
          text: colors.text.default,
          hover: colors.default,
          border: colors.default,
          borderHover: colors.default,
        },
        primary: {
          hover: colors.primary,
          text: colors.primary,
          textHover: colors.text.white,
          border: colors.primary,
          borderHover: colors.primary
        },
        secondary: {
          hover: colors.secondary,
          text: colors.secondary,
          textHover: colors.text.white,
          border: colors.secondary,
          borderHover: colors.secondary
        }
      }
    },
    textInput: {
      defaultType: {
        default: {
          ring: colors.primary
        },
        primary: {
          ring: colors.secondary,
          text: colors.text.white
        },
        secondary: {
          ring: colors.primary,
          text: colors.text.white
        }
      },
      underlineType: {
        default: {
          hover: colors.primary,
          border: colors.default,
          borderHover: colors.primary
        },
        primary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.primary,
          borderHover: colors.default
        },
        secondary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.secondary,
          borderHover: colors.default
        }
      },
      borderType: {
        default: {
          hover: colors.primary,
          border: colors.default,
          borderHover: colors.primary
        },
        primary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.primary,
          borderHover: colors.default
        },
        secondary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.secondary,
          borderHover: colors.default
        }
      }
    },
    textarea: {
      defaultType: {
        default: {
          ring: colors.primary
        },
        primary: {
          ring: colors.secondary,
          text: colors.text.white
        },
        secondary: {
          ring: colors.primary,
          text: colors.text.white
        }
      },
      underlineType: {
        default: {
          hover: colors.primary,
          border: colors.default,
          borderHover: colors.primary
        },
        primary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.primary,
          borderHover: colors.default
        },
        secondary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.secondary,
          borderHover: colors.default
        }
      },
      borderType: {
        default: {
          hover: colors.primary,
          border: colors.default,
          borderHover: colors.primary
        },
        primary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.primary,
          borderHover: colors.default
        },
        secondary: {
          hover: colors.default,
          text: '#3f3f46',
          border: colors.secondary,
          borderHover: colors.default
        }
      }
    },
    contactSection: {
      textInput: {
        defaultType: {
          primary: {
            color: 'fuchsia',
            text: 'green',
            ring: 'black'
          }
        }
      }
    },
    navigationBar: {
      defaultType: {
        subMenu: colors.default,
        subMenuText: colors.text.default,
        default: {
          text: colors.text.default,
          textHover: colors.primary,
          subMenuTextHover: colors.primary
        },
        primary: {
          text: colors.text.white,
          textHover: colors.gray[200],
          subMenuTextHover: colors.primary,
        },
        secondary: {
          text: colors.text.white,
          textHover: colors.gray[200],
          subMenuTextHover: colors.secondary,
        },
        transparent: {
          text: '#fff',
          textHover: colors.primary,
          color: 'transparent',
          scrollColor: '#fff',
          scrollText: colors.text.default,
          scrollTextHover: colors.primary,
          subMenuTextHover: colors.primary,
          logo: colors.text.white,
          scrollLogo: colors.primary
        }
      },

    }
  }
};
export default globalConfig;