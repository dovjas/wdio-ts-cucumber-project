
class CategoryFilter{
    async subCategoryLabel(label:string){
        return $(`//label[normalize-space()="${label}"]/input`);    
    }

    async selectSubCategory(label:string){
        const checkbox = await this.subCategoryLabel(label);
        await checkbox.waitForClickable();
        if(!(await checkbox.isSelected)){
            await checkbox.click();
        }
    }

    async isSubCategorySelected(label:string){
        return (await this.subCategoryLabel(label)).isSelected();
    }
}