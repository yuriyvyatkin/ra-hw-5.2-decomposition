import Title from '../common/Title/Title';
import TVProgramsList from '../common/lists/TVProgramsList'

// выводит список ТВ программ
export default function TVProgramWidget({ title, items }) {
  return (
    <div className="tv-program-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}
