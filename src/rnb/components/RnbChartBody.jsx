import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import DataGrid from './grid/DataGrid';

const DEFAULT_COLORS = ['#0284C7', '#059669', '#D97706', '#7C3AED', '#DC2626', '#0891B2'];

function buildChartRows(chart) {
  const { labels = [], datasets = [] } = chart;
  return labels.map((label, i) => {
    const row = { label };
    chart.datasets.forEach((ds) => {
      row[ds.label] = ds.data[i];
    });
    return row;
  });
}

function handleChartAreaClick(onChartClick, state) {
  if (!onChartClick || state?.activeLabel == null) return;
  const series = state.activePayload?.[0]?.dataKey ?? '';
  onChartClick(String(state.activeLabel).trim(), String(series).trim());
}

export default function RnbChartBody({
  chart,
  showGrid,
  gridData,
  onChartClick,
  size = 'card',
}) {
  const data = buildChartRows(chart);
  const seriesKeys = chart.datasets.map((d) => d.label);
  const type = chart.type || 'bar';
  const bodyClass = [
    'rnb-chart-panel-body',
    showGrid ? 'rnb-chart-panel-body--grid' : '',
    size === 'expanded' ? 'rnb-chart-panel-body--expanded' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const expandedChartHeight =
    typeof window !== 'undefined'
      ? Math.min(520, Math.round(window.innerHeight * 0.58))
      : 520;

  return (
    <div className={bodyClass}>
      {showGrid ? (
        <DataGrid
          plain
          embedded
          columns={gridData.columns}
          rows={gridData.rows}
          pageSize={100}
          enableColumnFilters={false}
          emptyMessage="No chart data"
        />
      ) : (
        <ResponsiveContainer
          width="100%"
          height={size === 'expanded' ? expandedChartHeight : '100%'}
        >
          {type === 'pie' ? (
            <PieChart onClick={(state) => handleChartAreaClick(onChartClick, state)}>
              <Pie
                data={data}
                dataKey={seriesKeys[0]}
                nameKey="label"
                cx="50%"
                cy="50%"
                outerRadius={size === 'expanded' ? '75%' : '70%'}
                label
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={DEFAULT_COLORS[i % DEFAULT_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          ) : type === 'line' ? (
            <LineChart
              data={data}
              margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
              onClick={(state) => handleChartAreaClick(onChartClick, state)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="label" tick={{ fontSize: size === 'expanded' ? 12 : 11 }} />
              <YAxis tick={{ fontSize: size === 'expanded' ? 12 : 11 }} />
              <Tooltip />
              <Legend />
              {seriesKeys.map((key, i) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart
              data={data}
              margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
              onClick={(state) => handleChartAreaClick(onChartClick, state)}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" vertical={false} />
              <XAxis dataKey="label" tick={{ fontSize: size === 'expanded' ? 12 : 11 }} />
              <YAxis tick={{ fontSize: size === 'expanded' ? 12 : 11 }} />
              <Tooltip />
              <Legend />
              {seriesKeys.map((key, i) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={DEFAULT_COLORS[i % DEFAULT_COLORS.length]}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      )}
    </div>
  );
}
