import { pageLinks } from '../data';
import PageLink from './PageLink';
const PageLinks = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass}>
            {pageLinks.map(link => {
                return <PageLink {...link} itemClass={itemClass} key={link.id} />;
            })}
        </ul>
    );
};
export default PageLinks;
