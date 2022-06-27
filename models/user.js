import  mongoose from "mongoose";
import validator from 'validator'

let image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAMFBMVEX////S0tLPz8/T09P8/PzY2Njv7+/4+Pjd3d3W1tba2tr09PTi4uLq6ury8vLn5+fnvkahAAAFGUlEQVR4nO2d27qiMAyFbSkHOb7/247AdhB03ECz2iym/5WXNF+ac+PtlkgkEolEIpFIJBKJRCKRSCQSiQQDzvVF17VVNXRd37jYnxOashkqO2OM+fmVtcV/I4lmaPPp7G9YU7Xd9cXghjz7dPyFe31tbejbzwqwUYf7UMb+UhRNle2QwCSFfIj9sRCaeqcAZimY4XI3wrW/mIF3KdRF7I+WpcgPSmCiupAquPbINXghu4wqlIcswVoIbeyPl6E4K4ARW1/BTQ4+IniQN7FP4E3rKYJH4EguhNPW8BVyy+ivBRN97HN4IKEFIxmvEDoZCTzIWb2Dl1PcCoEzZGyELsIMZdzsakkRGNPFPtAJhFzCXyxfmFCI3oQRPpNwlxaBMWy1JembMMF1G5qjVaNdVLGPdYgKIQJjmBKHXtwgztREZlE4NFjgUQTJIHlNHftou4E4hQmaQKmEOIUZFtcwgCziyJ0kiQaqAUvqVALVgCWH9i2mfyejuAygGPEHyxAiNICM8RUGz4ALkH6IfcAdID3jiCUwilhzQGEQHDQ6GNHfjsdGByP6jaJsV+GjDNQbBPl68hb9hRS0W2BIm3C1g78yUF9DQLtGQzCNACslLqgPEE4NYyYZHER/oJjuQpLBCN43Zup9Y4AYSb0MOrgM9M+oodqtC/rzhZQ7324uyUB8JO8NS9BpQjtHq94k4h2DjX3AHfTgomoe+4A7ABsESzGlCO43qo8SR7BVVf0R0gRSBlZ/h2UCeRlYXvUgUwYGrzAC9AwMQeKM3FuuLRmHRXzgUKMoHMHBDKqYpL/NtoAaQiBSA1jiRGMNRhwiRtDfXFmDiBH0D19skHruvaC/r7DFSTcemfziE+lZTZYoeYVskMAUGrxQCQqBzSc8KeVyJ55caYucXSS0h09KoeSJpHj0AddLXYas5bSI5ZDL2URrWz6j6FrxGgLZPsVGPlJ+YLOCJmMo2717Uw9Tc/jIEtt4vuu/Ea67o/vOlfIWg5g3/EbWKjYLJcQUvmMztWahA7/ufJWCzqCpDPBy4RWFqlCgbeEWfaqAfez+GV1Du2VoJZixinayF+GM4UYIasrtMe7Bk1rFfRBZH+yBhtg5RGT4lehOEr31Ygexx7QUiGAUQkzL2GsQgYnajS3g+x52Es9HoqezjxBJCGq0YCLK1l1NWmDiXAcVHmFFcBdZBnjffpDgcYI+EZjAEaOTHC0QJGTugH/YfZJwWSRuJtuXYK9c8GugThPKQyp0CQuBJvgC19CPEsIu4hcc+BFgPQLmXwUkgb+Lhz9r9wc+xxe5gLoL8PrhJvb5dgF1kAQ3YQR6G/QGiGuATwDx+16kwPkG5dHRC7Bn0cqqZ18B/WkJiUGcAZlF+CJ1UTB15tinOggigdSeK20B5E5U1mAEYBHY1ACwTIpODQCKgF+jLo90gZVPDYx0WY0pRFyQzRrUNlW+IrpXTOqdYmgkFYHPMc5I1hFI1UCyE81TO9kiV1nkqZ28IWUVxdd6hEOs/chVOFiTCcmAoa/yL4Q2ERNfBbHLoHjkYgcyxVX8PyogkSknMV8FIxMm4f+MEIvE5CazZxyRqKRwps0LAt4RsgkxJAIbtlRP4u3C3yAwFlPX3L1lwFo+WfAvpLCbRCOQP9OWkBa8oyT6q+BvFHnLaAu+1WXupHHGt6jI7xb8U8cLuAXvxcyUvdYN1nNQ7xIy8MsYqGuJTzyHMa4hA7+6KmvDeY1fkKTvZfcZfpPBH+0WYvAvuoqZAAAAAElFTkSuQmCC";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Provide a Username"],
    trim: true,
    minlength: 4,
  },
  avatar: {
    type: String,
    default: image,
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Please Provide Email",
    },
  },
  password: {
    type: String,
    required: [true,"Please Provide Password"],
    minlength: 8,
    trim: true,
  },
  bio: {
    type: String,
    default: "Hello There!",
    minlength: 2,
    maxlength: 250,
  },
});

export default mongoose.model("User", userSchema);
