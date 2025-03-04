using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Secondary.Pages;

public class Weatherforecast : PageModel
{
    private readonly ILogger<PrivacyModel> _logger;

    public Weatherforecast(ILogger<PrivacyModel> logger)
    {
        _logger = logger;
    }

    public void OnGet()
    {
    }
}

