import Link from '@mui/material/Link';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';

import { useFileMetadata } from '../../../../hooks/file/useFileMetadata';
import { FileMetaData } from '../../../../models/questionary/FileUpload';
import { FileIdWithCaptionAndFigure } from '../../../common/FileUploadComponent';
import { AnswerRenderer } from '../../QuestionaryComponentRegistry';

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0,
    margin: 0,
    '& li': {
      display: 'block',
      marginRight: theme.spacing(1),
    },
  },
}));

function DownloadableFileList(props: { fileIds: string[] }) {
  const { fileIds } = props;

  const classes = useStyles();
  const { files } = useFileMetadata(fileIds);

  const downloadLink = (file: FileMetaData) => (
    <Link href={`/files/download/${file.fileId}`} download>
      {file.originalFileName}
    </Link>
  );

  return (
    <ul className={classes.list}>
      {files.map((file) => (
        <li key={`file-id-${file.fileId}`}>{downloadLink(file)}</li>
      ))}
    </ul>
  );
}

const FilesAnswerRenderer: AnswerRenderer = ({ value }) => (
  <div>
    <DownloadableFileList
      fileIds={value.map((fileItem: FileIdWithCaptionAndFigure) => fileItem.id)}
    />
  </div>
);

export default FilesAnswerRenderer;
