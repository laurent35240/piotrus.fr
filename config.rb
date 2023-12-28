# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = ""
css_dir = "css"
sass_dir = "scss"
images_dir = "images"
http_images_path = "/images/"

project_path = File.dirname(__FILE__) + '/'

output_style = :compressed
relative_assets = true

# Enable Debugging (Line Comments, FireSass)
# Invoke from command line: compass watch -e development --force
if environment == :dev
  line_comments = true
  http_path = "/piotr/"
  sass_options = {:debug_info => true}
end
javascripts_dir = "js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
