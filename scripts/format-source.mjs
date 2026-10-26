import ts from 'typescript'
import {readFile,writeFile,readdir} from 'node:fs/promises'
import {join} from 'node:path'
const printer=ts.createPrinter({newLine:ts.NewLineKind.LineFeed})
async function format(directory){for(const entry of await readdir(directory,{withFileTypes:true})){const path=join(directory,entry.name);if(entry.isDirectory())await format(path);else if(/\.tsx?$/.test(path)&&!path.endsWith('.d.ts')){const source=ts.createSourceFile(path,await readFile(path,'utf8'),ts.ScriptTarget.Latest,true,path.endsWith('.tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);if(source.parseDiagnostics.length)throw new Error('Parse error: '+path);await writeFile(path,printer.printFile(source))}}}
await format('src')
