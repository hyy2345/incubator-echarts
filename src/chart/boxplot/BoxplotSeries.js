import * as zrUtil from 'zrender/src/core/util';
import SeriesModel from '../../model/Series';
import {seriesModelMixin} from '../helper/whiskerBoxCommon';

var BoxplotSeries = SeriesModel.extend({

    type: 'series.boxplot',

    dependencies: ['xAxis', 'yAxis', 'grid'],

    // TODO
    // box width represents group size, so dimension should have 'size'.

    /**
     * @see <https://en.wikipedia.org/wiki/Box_plot>
     * The meanings of 'min' and 'max' depend on user,
     * and echarts do not need to know it.
     * @readOnly
     */
    defaultValueDimensions: [
        {name: 'min', defaultTooltip: true},
        {name: 'Q1', defaultTooltip: true},
        {name: 'median', defaultTooltip: true},
        {name: 'Q3', defaultTooltip: true},
        {name: 'max', defaultTooltip: true}
    ],

    /**
     * @type {Array.<string>}
     * @readOnly
     */
    dimensions: null,

    /**
     * @override
     */
    defaultOption: {
        zlevel: 0,                  // 一级层叠
        z: 2,                       // 二级层叠
        coordinateSystem: 'cartesian2d',
        legendHoverLink: true,

        hoverAnimation: true,

        // xAxisIndex: 0,
        // yAxisIndex: 0,

        layout: null,               // 'horizontal' or 'vertical'
        boxWidth: [7, 50],       // [min, max] can be percent of band width.

        itemStyle: {
            color: '#fff',
            borderWidth: 1
        },

        emphasis: {
            itemStyle: {
                borderWidth: 2,
                shadowBlur: 5,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                shadowColor: 'rgba(0,0,0,0.4)'
            }
        },

        animationEasing: 'elasticOut',
        animationDuration: 800
    }
});

zrUtil.mixin(BoxplotSeries, seriesModelMixin, true);

export default BoxplotSeries;
