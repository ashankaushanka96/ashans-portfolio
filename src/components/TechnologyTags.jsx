import { FiCpu, FiDatabase, FiFolder, FiGitBranch, FiRadio, FiShare2, FiWifi } from 'react-icons/fi';
import { SiApachekafka, SiApachesolr, SiRedis } from 'react-icons/si';
import { toolsAndPlatforms } from '../config/skills';

const logos = Object.fromEntries(toolsAndPlatforms.map(tool => [tool.title, tool.image]));
const icons = {
  Kafka: SiApachekafka,
  Solr: SiApachesolr,
  Redis: SiRedis,
  EFS: FiFolder,
  S3: FiDatabase,
  'CI/CD': FiGitBranch,
  Ethernet: FiShare2,
  SON: FiRadio,
  'Network Optimization': FiWifi,
};

// Labels stay visible; the adjacent icons are decorative.
// eslint-disable-next-line react/prop-types
export default function TechnologyTags({ technologies }) {
  return <div className="tags">
    {/* eslint-disable-next-line react/prop-types */}
    {technologies.map(technology => {
      const image = logos[technology];
      const Icon = icons[technology] || FiCpu;
      return <span className="technology-tag" key={technology}>
        {image ? <img src={image} alt="" loading="lazy"/> : <Icon aria-hidden="true"/>}
        {technology}
      </span>;
    })}
  </div>;
}
