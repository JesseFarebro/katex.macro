import {createMacro} from "babel-plugin-macros"
import jsxSyntax from "@babel/plugin-syntax-jsx"
import HTMLtoJSX from "htmltojsx"
import katex from "katex"

function TeXtoJSX(elements, babel, converter) {
  const element = elements[0]

  const html = katex.renderToString(element.value.raw)
  const jsx = converter.convert(html)

  return babel.parse(jsx, {
    plugins: [jsxSyntax]
  })
}

function katexMacro({
  references,
  babel
}) {
  const converter = new HTMLtoJSX({createClass: false})

  references.default.forEach(({parentPath}) => {
    if (parentPath.type === 'TaggedTemplateExpression') {
      const {node} = parentPath
      const ast = TeXtoJSX(node.quasi.quasis, babel, converter)
      parentPath.replaceWithMultiple(ast.program.body)
    }
  })
}


export default createMacro(katexMacro)
