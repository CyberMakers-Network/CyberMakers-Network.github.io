import uniqid from 'uniqid';
import { contributors } from '../../utility/data';

const Contributors = () => {
  if (!contributors.length) return null;

  return (
    <section className="section contributors" id="contributors">
      <h2 className="section__title">Contributors</h2>
      <ul className="contributors__list">
        {contributors.map((contributor) => (
          <li key={uniqid()} className="contributors__list-item btn btn--plain">
            {contributor.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contributors;
