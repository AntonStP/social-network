import classNames from "classnames";
import Scroll from "../baseComponents/gui/scroll/Scroll";

function Section({mod, className, children}) {


    return (
        <section className={classNames('section', className, {
            [`section_${mod}`]: mod
        })}>
            <Scroll mod={mod}>
                {children}
            </Scroll>
        </section>
    );
}

export default Section;
