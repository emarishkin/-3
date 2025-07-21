import { Modal } from "antd";
import type { FC } from "react";

interface ModalCalcIMTProps{
    open:boolean
    onCancel: () => void;
}

export const ModalCalcIMT:FC<ModalCalcIMTProps> = ({open,onCancel}) => {
    return (
    <Modal
        title="Basic Modal"
        footer={null}
        open={open}
        onCancel={onCancel}
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>
    )
}