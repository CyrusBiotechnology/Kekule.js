export = Kekule

declare namespace Kekule {
  namespace ChemWidget {
    class Viewer {
      constructor(element: HTMLElement);
      getChemObj(): Mol | null;
      setBackgroundColor(color: string): void;
      setChemObj(mol: Mol | null): void;
      setDimension(width: number, height: number): void;
      setEnableDirectInteraction(enable: boolean): void;
      setEnableEdit(enable: boolean): void;
      setEnableToolbar(enable: boolean): void;
    }
  }
  namespace HtmlElementUtils {
    function getElemOffsetDimension(element: HTMLElement): Dimension;
  }
  namespace IO {
    function loadMimeData(data: string, mimeType: string): Mol;
  }
  interface Dimension {
    width: number;
    height: number;
  }
  interface Mol {
    beginUpdate(): void;
    endUpdate(): void;
    getChildAt(index: number): Atom | Bond;
    getChildCount(): number;
    setRenderOption(optionName: 'atomColor', optionValue: string): void;
    setRenderOption(optionName: 'bondColor', optionValue: string): void;
    setRenderOption(optionName: 'opacity', optionValue: number): void;
  }
  interface MolNode {
    setRenderOption(optionName: 'color', optionValue: string): void;
    setRenderOption(optionName: 'customLabel', optionValue: string): void;
  }
  interface Atom extends MolNode {}
  interface Bond extends MolNode {}
}
