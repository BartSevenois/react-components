/** Utils **/
import { deepMergeObjects } from '../../../utils/object.utils';

/** Configuration */
import tailwindConfig from './../../../config/tailwind.css';

/** Component: Grid **/
const Grid = ({
  // "Standard" props
  children,
  // Mediaqueries
  mq
}) => {

  /** Variables **/
  const classes = [];
  const mediaqueries = deepMergeObjects({
    cols: {
      md: 2,
      lg: 3
    },
    gap: {
      default: 8,
    }
  }, mq);

  /** Mediaquery classes **/
  if (mediaqueries?.cols?.sm && tailwindConfig?.gridCols?.sm?.[mediaqueries.cols.sm]) classes.push(tailwindConfig.gridCols.sm[mediaqueries.cols.sm]);
  if (mediaqueries?.cols?.md && tailwindConfig?.gridCols?.md?.[mediaqueries.cols.md]) classes.push(tailwindConfig.gridCols.md[mediaqueries.cols.md]);
  if (mediaqueries?.cols?.lg && tailwindConfig?.gridCols?.lg?.[mediaqueries.cols.lg]) classes.push(tailwindConfig.gridCols.lg[mediaqueries.cols.lg]);
  if (mediaqueries?.cols?.xl && tailwindConfig?.gridCols?.xl?.[mediaqueries.cols.xl]) classes.push(tailwindConfig.gridCols.xl[mediaqueries.cols.xl]);
  if (mediaqueries?.cols?.xxl && tailwindConfig?.gridCols?.xxl?.[mediaqueries.cols.xll]) classes.push(tailwindConfig.gridCols.xxl[mediaqueries.cols.xxl]);

  if (mediaqueries?.gap?.default && tailwindConfig?.gap?.[mediaqueries.gap.default]) classes.push(tailwindConfig.gap[mediaqueries.gap.default])
  if (mediaqueries?.gap?.sm && tailwindConfig?.gap?.sm?.[mediaqueries.gap.sm]) classes.push(tailwindConfig.gap.sm[mediaqueries.gap.sm]);
  if (mediaqueries?.gap?.md && tailwindConfig?.gap?.md?.[mediaqueries.gap.md]) classes.push(tailwindConfig.gap.md[mediaqueries.gap.md]);
  if (mediaqueries?.gap?.lg && tailwindConfig?.gap?.lg?.[mediaqueries.gap.lg]) classes.push(tailwindConfig.gap.lg[mediaqueries.gap.lg]);
  if (mediaqueries?.gap?.xl && tailwindConfig?.gap?.xl?.[mediaqueries.gap.xl]) classes.push(tailwindConfig.gap.xl[mediaqueries.gap.xl]);
  if (mediaqueries?.gap?.xxl && tailwindConfig?.gap?.xxl?.[mediaqueries.gap.xll]) classes.push(tailwindConfig.gap.xxl[mediaqueries.gap.xxl]);

  if (mediaqueries?.gapX?.sm && tailwindConfig?.gapX?.sm?.[mediaqueries.gapX.sm]) classes.push(tailwindConfig.gapX.sm[mediaqueries.gapX.sm]);
  if (mediaqueries?.gapX?.md && tailwindConfig?.gapX?.md?.[mediaqueries.gapX.md]) classes.push(tailwindConfig.gapX.md[mediaqueries.gapX.md]);
  if (mediaqueries?.gapX?.lg && tailwindConfig?.gapX?.lg?.[mediaqueries.gapX.lg]) classes.push(tailwindConfig.gapX.lg[mediaqueries.gapX.lg]);
  if (mediaqueries?.gapX?.xl && tailwindConfig?.gapX?.xl?.[mediaqueries.gapX.xl]) classes.push(tailwindConfig.gapX.xl[mediaqueries.gapX.xl]);
  if (mediaqueries?.gapX?.xxl && tailwindConfig?.gapX?.xxl?.[mediaqueries.gapX.xll]) classes.push(tailwindConfig.gapX.xxl[mediaqueries.gapX.xxl]);

  if (mediaqueries?.gapY?.sm && tailwindConfig?.gapY?.sm?.[mediaqueries.gapY.sm]) classes.push(tailwindConfig.gapY.sm[mediaqueries.gapY.sm]);
  if (mediaqueries?.gapY?.md && tailwindConfig?.gapY?.md?.[mediaqueries.gapY.md]) classes.push(tailwindConfig.gapY.md[mediaqueries.gapY.md]);
  if (mediaqueries?.gapY?.lg && tailwindConfig?.gapY?.lg?.[mediaqueries.gapY.lg]) classes.push(tailwindConfig.gapY.lg[mediaqueries.gapY.lg]);
  if (mediaqueries?.gapY?.xl && tailwindConfig?.gapY?.xl?.[mediaqueries.gapY.xl]) classes.push(tailwindConfig.gapY.xl[mediaqueries.gapY.xl]);
  if (mediaqueries?.gapY?.xxl && tailwindConfig?.gapY?.xxl?.[mediaqueries.gapY.xll]) classes.push(tailwindConfig.gapY.xxl[mediaqueries.gapY.xxl]);

 

  /** Render component: Grid **/
  return(
    <div className={[
      'grid grid-cols-1',
      classes.join(' ')
    ].join(' ')}>
      { children }
    </div>
  );
};

export default Grid;