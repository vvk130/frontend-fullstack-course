PAGES_DIR="./src/routes"
TSX_FILE="./src/routes/__root.tsx"
START_MARK="{/* NAV START */}"
END_MARK="{/* NAV END */}"
                    
generate_nav() {
  NAV_CONTENT="[\n"

  for file in "$PAGES_DIR"/*; do
    [ -f "$file" ] || continue
    filename=$(basename "$file")
    name="${filename%.*}"

    [[ "$name" == \$* ]] && continue

    if [[ "$name" == "index" ]]; then
      href="/"
      display="Login/SignUp"
    else
      href="/$name"
      display=$(echo "$name" | sed -E 's/-/ /g; s/(^| )([a-z])/\U\2/g')
    fi

    NAV_CONTENT+="  <a key=\"$name\" href=\"$href\">$display</a>,\n"
  done

  NAV_CONTENT+="]"

  if grep -q "$START_MARK" "$TSX_FILE"; then
    awk -v start="$START_MARK" -v end="$END_MARK" -v nav="$NAV_CONTENT" '
      $0 ~ start {print start; print nav; in_nav=1; next}
      $0 ~ end {in_nav=0}
      !in_nav {print}
    ' "$TSX_FILE" > "${TSX_FILE}.tmp" && mv "${TSX_FILE}.tmp" "$TSX_FILE"
  else
    echo "⚠️  NAV markers not found in $TSX_FILE"
  fi

  echo "✅ Navigation updated: $(date)"
}

generate_nav

echo "👀 Watching $PAGES_DIR for changes..."
while inotifywait -e create,delete,move "$PAGES_DIR" >/dev/null 2>&1; do
  generate_nav
done
