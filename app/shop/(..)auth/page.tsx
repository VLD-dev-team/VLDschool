import { Modal } from './modal';

export default function AuthModal({ children
}: {
    children: React.ReactElement
}) {
    return <Modal>{children}</Modal>;
}