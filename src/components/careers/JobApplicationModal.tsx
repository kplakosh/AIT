import { careersContent, type JobOpening } from '../../content/site'
import { Modal } from '../ui/Modal'
import { JobApplicationForm } from './JobApplicationForm'

type JobApplicationModalProps = {
  opening: JobOpening | null
  onClose: () => void
}

export function JobApplicationModal({ opening, onClose }: JobApplicationModalProps) {
  return (
    <Modal
      open={opening !== null}
      onClose={onClose}
      title={careersContent.applyHeading}
      description={opening?.title}
    >
      {opening ? <JobApplicationForm opening={opening} /> : null}
    </Modal>
  )
}
