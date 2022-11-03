import React from 'react';
import StyleType from './TypeSelector.module.css';

export default function TypeSelector({ type, ico }) {
  const typeName = { ...type };
  const icoImg = { ...ico };

  return (
    <>
      <div className={StyleType.leftContainer}>
        <ul className="contain">
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[0]}
                alt={typeName[0]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[0]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[1]}
                alt={typeName[1]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[1]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[2]}
                alt={typeName[2]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[2]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[3]}
                alt={typeName[3]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[3]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[4]}
                alt={typeName[4]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[4]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[5]}
                alt={typeName[5]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[5]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[6]}
                alt={typeName[6]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[6]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[7]}
                alt={typeName[7]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[7]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[8]}
                alt={typeName[8]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[8]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[9]}
                alt={typeName[9]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[9]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[10]}
                alt={typeName[10]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[10]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[11]}
                alt={typeName[11]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[11]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[12]}
                alt={typeName[12]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[12]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[13]}
                alt={typeName[13]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[13]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[14]}
                alt={typeName[14]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[14]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[15]}
                alt={typeName[15]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[15]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[16]}
                alt={typeName[16]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[16]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[17]}
                alt={typeName[17]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[17]}</span>
            </button>
          </li>
          <li className={StyleType.list}>
            <button className={StyleType.type}>
              <img
                src={icoImg[18]}
                alt={typeName[18]}
                className={StyleType.icon}
              />
              <span className={StyleType.text}>{typeName[18]}</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
