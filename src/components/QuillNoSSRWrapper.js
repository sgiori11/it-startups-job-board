import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = (props) => {
  return <ReactQuill {...props} />;
};

export default QuillNoSSRWrapper;
