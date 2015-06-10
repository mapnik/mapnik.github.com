module Toc
  def toc(input)
    output = "<ul class='nav'>"
    input.scan(/<(h2|h3)(?:>|\s+(.*?)>)([^<]*)<\/\1\s*>/mi).each do |entry|
      level = entry[0]
      id = (entry[1][/^id=(["'])(.+?)(["'])/, 2] rescue nil)
      title = entry[2].gsub(/<(\w*).*?>(.*?)<\/\1\s*>/m, '\2').strip
      if level == 'h2'
        output << %{<li class="#{level} space-top1"><a href="##{id}" class="strong block" title="#{title}">#{title}</a></li>}
      else
        output << %{<li class="#{level}"><a href="##{id}" class="block" title="#{title}">#{title}</a></li>}
      end
    end
    output << '</ul>'
    output
  end
end
Liquid::Template.register_filter(Toc)