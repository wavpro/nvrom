/*
Language: NVROM
Author: Albin Hedwall <albin.hedwall@gmail.com>
Description: A simple language for Airoha/Mediatek headphones .nvr files.
*/

export default function(hljs) {
  return {
    name: "nvrom",
    keywords: {
      keyword: '',
      literal: '',
      key: [/&0x[0-9A-F]+/]
    },
    case_insensitive: false,
    contains: [
      hljs.COMMENT(
        '//', // begin
        '\n', // end
        {
          contains: [
            {
              scope: 'doc', begin: '@\\w+'
            }
          ]
        }
      ),
      {
        scope: "hex",
        begin: /[0-9A-F]/,
        ends: /[0-9A-F]/,
        illegal: /[^0-9A-F]/,
      }
    ]
  }
}
