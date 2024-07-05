
const FormUpload = ({callback}:{callback:Function}) => {
  
  return (
    <div className="formbold-main-wrapper">
      <div className="formbold-form-wrapper">
        <form action="#">
          <div className="mb-6 pt-4">
            <label className="formbold-form-label formbold-form-label-2">
              Upload File
            </label>

            <div className="formbold-mb-5 formbold-file-input">
              <input
                type="file"
                name="files"
                id="file"
                multiple
                className="h-fit w-fit"
              />

              <label htmlFor="file">
                <div>
                  <span className="formbold-drop-file"> Drop files here </span>
                  <span className="formbold-or"> Or </span>
                  <span className="formbold-browse"> Browse </span>
                </div>
              </label>
            </div>
          </div>

          <a type="text" className="formbold-btn w-full">
            Upload
          </a>
        </form>
      </div>
    </div>
  )
}

export default FormUpload