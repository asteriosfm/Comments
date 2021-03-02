import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';


export default ({props}) => {
  const { setComments, comments, setCommentsMode } = props;

  const [form, setForm] = useState({comment: ''});

  return <>
    <TextField
      style={{marginTop: "20px"}}
      fullWidth
      label="Leave comment :)"
      multiline
      rows={4}
      variant="outlined"
      value={form.comment}
      onChange={(e) => setForm({...form, comment: e.target.value})}
    />
    <Button
      style={{marginTop: "20px"}}
      variant="outlined"
      onClick={() => {
        setComments([form, ...comments])
        setForm({...form, comment: ''})
        setCommentsMode(true)
      }}
      disabled={!form.comment}
    >
      Comment
    </Button>
  </>
}
