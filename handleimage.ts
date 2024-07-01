const onSubmit = async (values: z.infer<typeof UserValidation) =>{
  const blob = values.profile_photo;
  const hasImageChanged = isBaseImage(blob);

  if(hasImageChaged) {
    const imgRes = await startUpload(file);

  if(imgRes && imgRes[0].fileUrl){
    values.profile_photo = imgRes[0].fileUrl;
  }
}

  await UpdateUser({
    name: values.name,
    path: pathname,
    username: values.username,
    userId: user.id,
    bio: values.bio,
    image: values.profile_photo,
  });

  if(pathname ==="/profile/edit){
     router.back();
  }else {
  router.push("/");
  }
};
