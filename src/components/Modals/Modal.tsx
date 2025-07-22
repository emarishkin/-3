import { Modal } from "antd";
import { type FC, type ReactNode } from "react";


interface ModalCalcIMTProps{
    open:boolean
    title:string
    onCancel: () => void;
    children:ReactNode
}

export const ModalMain:FC<ModalCalcIMTProps> = ({open,onCancel,children,title}) => {
    return (
    <Modal
        title={title}
        footer={null}
        open={open}
        onCancel={onCancel}
    >
        {children}
    </Modal>
    )
}