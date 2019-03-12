export = Kekule

declare namespace Kekule {
  interface HtmlElementUtils {
    getElemOffsetDimension(element: HTMLElement): Dimension;
  }
  interface Dimension {
    width: number;
    height: number;
  }
  namespace ChemWidget {
    class Viewer {
      constructor(element: HTMLElement);
      setDimension(width: number, height: number): void;
      setChemObj(mol: Mol): void;
      setEnableToolbar(enable: boolean): void;
      setEnableDirectInteraction(enable: boolean): void;
      setEnableEdit(enable: boolean): void;
    }
  }
  interface IO {
    loadMimeData(data: string, mimeType: string): Mol;
  }
  interface Mol {
  }
}
