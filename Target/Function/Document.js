var a=async(...[r])=>{for(const e of r)for(const n of await(await import("fast-glob")).default(e.replaceAll("'","").replaceAll('"',"")))t.push(n);t.reverse(),console.log(t),p(["typedoc","--commentStyle all","--gitRevision main",`--customCss ${o(`${i}/../Stylesheet/Theme.css`)}`,"--includeVersion","--out ./Documentation",`--plugin ${o(`${i}/../../Target/Variable/Load.js`)}`,"--plugin typedoc-plugin-remove-references","--plugin typedoc-plugin-rename-defaults","--plugin typedoc-plugin-mdn-links","--plugin typedoc-plugin-zod","--plugin typedoc-plugin-merge-modules","--plugin typedoc-plugin-keywords","--searchInComments",`--keywords ${(await(await import("../Function/JSON.js")).default("package.json",process.cwd()))?.keywords?.join(" --keywords ")??" typescript-document "}`,"--theme TypeScriptDocument","--entryPointStrategy expand","--mergeModulesRenameDefaults","--mergeModulesMergeMode module",`--entryPoints ${t.map(e=>[e.replace("Source/","").split(".").slice(0,-1).join("."),e]).join(" --entryPoints ")}`].join(" "))};const{default:p}=await import("../Function/Exec.js"),{resolve:o}=await import("path"),t=[],i=(await import("url")).fileURLToPath((await import("path")).dirname(import.meta.url));export{i as Current,p as Exec,t as Pipe,a as default,o as resolve};
