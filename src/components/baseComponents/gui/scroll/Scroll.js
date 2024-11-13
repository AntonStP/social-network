import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import classNames from "classnames";

function CustomScroll({mod, className, children}) {
    return (
        <div className={classNames('scroll', className, {
            [`scroll_${mod}`]: mod
        })} style={{height:'100%'}}>
            <PerfectScrollbar
                options={{
                    suppressScrollX: true, // Отключить горизонтальный скролл
                    wheelPropagation: false,
                }}
                style={{ maxHeight: '100%', position: 'relative' }}
            >
                {children}
            </PerfectScrollbar>
        </div>
    );
};

export default CustomScroll;