watch('^src/.+\.(js|txt)'){|md|
  system("npm run build")
}

watch('^test/.+\.js'){|md|
  system("npm run test")
}
