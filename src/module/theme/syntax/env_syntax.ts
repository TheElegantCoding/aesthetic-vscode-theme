import type { Palette } from '@global/type/color_scheme_type';

const environmentSyntax = (colors: Palette) => {
  const { gray, syntax } = colors;

  return [{
    name: 'environment variable',
    scope: 'variable.other.env',
    settings: {
      fontStyle: 'bold',
      foreground: syntax.blue
    }
  }, {
    name: 'environment keyword operator',
    scope: 'keyword.operator.assignment.env',
    settings: {
      foreground: gray.gray_300
    }
  }];
};

export { environmentSyntax as envSyntax };