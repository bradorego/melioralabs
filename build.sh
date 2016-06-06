#bash script to copy files into deploy because I'm lazy....I hope



if [ "$1" != "" ]; then
  PAGE="$1";
  echo "copying to deploy/$PAGE";
  cd $PAGE;
  lessc -x ../less/creative.less ../css/creative2.min.css; #compile LESS
  rm -r ../deploy/$PAGE; #clear out old code
  mkdir ../deploy/$PAGE; #move new code
  cp -r ../css ../deploy;
  cp -r img ../deploy/$PAGE;
  cp -r thank-you ../deploy/$PAGE;
  cp -r confirm-email ../deploy/$PAGE;
  cp index.html ../deploy/$PAGE;
  cp favicon.ico ../deploy/$PAGE;
  echo "done copying!";
  cd ..;
else
  echo "Please give a page to deploy";
fi