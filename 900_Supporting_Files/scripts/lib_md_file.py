def get_property(full_filename, property_name):
    property_value = ""
    f = open(full_filename, encoding="utf-8", errors="ignore", mode="r")
    lines = f.readlines()
    f.close()
    for line in lines:
        if "fileClass:: " in line:
            property_value = line.replace(property_name + ":: ", "")
            property_value = property_value.replace("\n", "")
            break
        elif "fileClass: " in line:
            property_value = line.replace(property_name + ": ", "")
            property_value = property_value.replace("\n", "")
            break
    property_value = property_value.strip()
    property_value = property_value.strip()
    return property_value


def get_fileClass(full_filename):
    return get_property(full_filename, "fileClass")
