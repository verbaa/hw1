import React from "react";
import "./App.css";
import pdfIcon from './images/pdf.png';
import docIcon from './images/doc.png';
import xlsxIcon from './images/xlsx.webp';
import folderIcon from './images/folder.png';


export const Direct = ({items}) => (
    <React.Fragment>
        {items.map(n => (
            <div className="directions" key={n.id}>
                <span>{n.name} </span>
                <span>
                    {n.type === 'dir' ? <FolderIcon/> : ''}
                    {(function () {
                        switch (n.name.split('.').pop()) {
                            case 'pdf':
                                return <PdfIcon/>;
                            case 'docx':
                                return <DocIcon/>;
                            case 'xlsx':
                                return <XlsxIcon/>;
                            default:
                                return '';
                        }
                    })()}
                </span>
                {n.children && n.children.length ? <Direct items={n.children}/> : null}
            </div>
        ))}
    </React.Fragment>
);


const PdfIcon = () => {
    return (
        <img src={pdfIcon} alt="file"/>
    )
}
const XlsxIcon = () => {
    return (
        <img src={xlsxIcon} alt="file"/>
    )
}

const DocIcon = () => {
    return (
        <img src={docIcon} alt="file"/>
    )
}

const FolderIcon = () => {
    return (
        <img src={folderIcon} alt="folder"/>
    )
}