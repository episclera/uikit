/* istanbul ignore file */
import { red, gold, green, blue } from '@ant-design/colors'
import { WeaverTailwindConfig } from '../types'

/* istanbul ignore next */
const weaverTailwindConfig: WeaverTailwindConfig = {
  important: true, // add !important for all classes.This can be really useful when using Tailwind with existing CSS that has high specificity selectors.
  mode: 'jit',
  purge: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // NOTE: vars should be same as in weaver/styles/vars.less or if not present there, then check ant-design default theme https://github.com/ant-design/ant-design/blob/0e4360038e79c7bd8bc7eb33dc56b7d0ccd481c4/components/style/themes/default.less
        // -------- Colors -----------
        'primary-color': blue[6],
        'info-color': blue[6], // @primary-color
        'success-color': green[6],
        'processing-color': blue[6],
        'error-color': red[5],
        'warning-color': gold[6],
        'normal-color': '#d9d9d9',
        // -------- Link Colors -----------
        'link-color': blue[6], // @primary-color
        // -------- Items state Colors -----------
        'item-active': 'rgb(230, 247, 255)', // @primary-1
        'item-hover-bg': '#f5f5f5',
        // -------- Typography -----------
        'text-color': 'rgba(0, 0, 0, 0.85)', // fade(#000, 85%)
        'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // fade(#000, 45%)
        'heading-color': 'rgba(0, 0, 0, 0.85)', // fade(#000, 85%)
        // -------- Disabled states -----------
        'disabled-color': 'rgba(0, 0, 0, 0.25)', // fade(#000, 25%)
        'disabled-bg': 'rgb(245, 245, 245)', // hsv(0, 0, 96%)
        // -------- Body colors -----------
        'body-background': '#ffffff',
        // -------- Base background color for most components -----------
        'component-background': '#ffffff',
        //  -------- Shadow colors ----------
        'shadow-color': 'rgba(0, 0, 0, 0.15)',
        // -------- Border colors -----------
        'border-color-base': 'rgb(241, 241, 241)', // hsv(0, 0, 85%)
        //  -------- Outline colors ----------
        'outline-color': blue[6], // @primary-color
      },
    },
    container: {
      center: true, // To center containers
    },
    screens: {
      // NOTE: vars should be same as in weaver/styles/vars.less or if not present there, then check ant-design default theme https://github.com/ant-design/ant-design/blob/0e4360038e79c7bd8bc7eb33dc56b7d0ccd481c4/components/style/themes/default.less
      xs: { max: '576px' }, // < 576
      sm: '576px', // >= 576
      md: '768px', // >=768
      lg: '992px', // >=992
      xl: '1200px', // >=1200
      xxl: '1600px', // >=1600
    },
  },
}

/* istanbul ignore next */
export default weaverTailwindConfig
