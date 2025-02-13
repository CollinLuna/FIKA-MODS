import { ITemplateItem } from "@spt-aki/models/eft/common/tables/ITemplateItem";

export function isBulletOrShotgunShell(item: ITemplateItem): boolean {
  const props = item._props;

  return props.ammoType === "bullet" || props.ammoType === "buckshot";
}