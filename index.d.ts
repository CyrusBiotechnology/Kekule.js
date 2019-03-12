export = Kekule

declare namespace Kekule {
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
  }
}
