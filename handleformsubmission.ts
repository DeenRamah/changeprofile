const handleImage = (
  e: ChangeEvent<HTMLInputsElements>, //Receives the change event from the input field
  fieldChange:(value: string) => void //Receives a callback function to handle the image data
) = {
  e.preventDefault(); // prevents the default form submission behaviour
  const fileReader = new FileReader(); //creates a new instance of File Reader to read file content

  if(e.target.files && e.target.files.length >0){// cjhecks if there's utlest on selected file in an image type
    const file = e.target.files[0]; //Retrieves the first file from the list of selected files
    setFiles(Array.from(e.target.files));//updates the componentes = stores all the elements from the selected components state


    if(!file.type.includes("image")) return; // checks if the selected fi;es ins an image type

    fileReader.onload = async (event) => {
      const imageDataUrl = event.target?.result?.toString() || ""; //read the file as a data URL, by converting it to string and assigns it to imageDataUrl
      fieldChange(imageDataUrl)
    };

    fileReader.reasAsDataURL(file);// Reads the contents of the selected files as a data URL
  }
};
